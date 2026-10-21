#!/usr/bin/env bash
# Copies Bubby's art from the iOS app repo into public/assets so the waitlist
# always shows the same sprites, rooms, food pictures and font as the app.
#
# usage: scripts/sync-app-art.sh [path-to-bubby-repo] [git-ref]
# defaults: ../bubby and origin/main (read with git archive, so the app
# checkout's working tree and branch are never touched).
# Needs macOS `sips` to shrink the room scenes (1.8 MB PNGs) into web JPEGs.
set -euo pipefail

app_repo="${1:-$(cd "$(dirname "$0")/../.." && pwd)/bubby}"
ref="${2:-origin/main}"
here="$(cd "$(dirname "$0")/.." && pwd)"
assets="$here/public/assets"
xcassets="ios/Bubby/Bubby/Assets.xcassets"

frames=(
  bubby_idle_neutral bubby_idle_blink bubby_idle_look_left bubby_idle_look_right bubby_idle_look_up
  bubby_eating_chewing_closed bubby_eating_chewing_open
  bubby_happy_bounce_01 bubby_happy_bounce_02 bubby_happy_bounce_03
  bubby_sleepy_droopy bubby_sleepy_z
  bubby_sick_01 bubby_sick_02
  bubby_recovery_01 bubby_recovery_02 bubby_recovery_03 bubby_recovery_04
  bubby_workout_01 bubby_workout_02
  bubby_spin_01 bubby_spin_02 bubby_spin_03 bubby_spin_04
  bubby_x_eyes
)
rooms=(
  scene_kitchen_idle_day_pink
  scene_kitchen_eating_day_pink
  scene_gym_lifting_day_pink
  scene_bedroom_sleeping_pink
  scene_kitchen_idle_dark
)

work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

git -C "$app_repo" archive "$ref" \
  "$xcassets" \
  ios/Bubby/Bubby/Resources/Fonts \
  public/assets/fonts/dogica/dogica_license.txt \
  | tar -x -C "$work"
src="$work/$xcassets"

rm -rf "$assets/bubby" "$assets/rooms" "$assets/food"
mkdir -p "$assets/bubby" "$assets/rooms" "$assets/food" "$assets/fonts/dogica"

for frame in "${frames[@]}"; do
  cp "$src/$frame.imageset/$frame.png" "$assets/bubby/$frame.png"
done

for photo in "$src"/bubby_photo_*.imageset/*.png; do
  name="$(basename "$photo" .png)"
  cp "$photo" "$assets/food/${name#bubby_photo_}.png"
done

for room in "${rooms[@]}"; do
  sips -s format jpeg -s formatOptions 82 --resampleWidth 1400 \
    "$src/$room.imageset/$room.png" --out "$assets/rooms/${room#scene_}.jpg" >/dev/null
done

cp "$work/ios/Bubby/Bubby/Resources/Fonts/dogica.ttf" "$work/ios/Bubby/Bubby/Resources/Fonts/dogicabold.ttf" "$assets/fonts/dogica/"
cp "$work/public/assets/fonts/dogica/dogica_license.txt" "$assets/fonts/dogica/"

sips -z 180 180 "$src/AppIcon.appiconset/AppIcon.png" --out "$here/public/apple-touch-icon.png" >/dev/null
sips -z 64 64 "$src/AppIcon.appiconset/AppIcon.png" --out "$here/public/favicon.png" >/dev/null

echo "synced Bubby art from $app_repo @ $(git -C "$app_repo" rev-parse --short "$ref")"
