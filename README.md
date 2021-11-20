# aw

Alacritty and wallpaper themes

[Preview](https://twitter.com/joshmedeski/status/1423723525999931397)

⚠️ This is very early ALPHA development, feel free to create GitHub issues or star it to track new releases. Instructions for setting up and using coming soon. Message me on twitter, [@joshmedeski](https://twitter.com/joshmedeski) if you want to give feedback or help with the project.

## How to Install

Clone this repository on your computer to the `~/.config/aw` directory on your macOS or linux machine.

```
gh repo clone joshmedeski/aw ~/.config/aw
```

**Want to contribute?** fork the repository and clone your fork. [See contributer docs](./docs)

## Config

## Cache

Cache is stored in one of the following directories based off of your operating system:

- macOS: `~/Library/Caches/aw`
- Unix: `~/.cache/aw`
- Windows: `%LOCALAPPDATA%\aw`

To clear the cache, it is safe to delete the cache folder entirely. **Note:** this may cause slower loading times for the `aw` cli as it will have to redowload stored data.

## Tasks

- [ ] Get and set cache to one of the following directories based
- [ ] aw themes are set by:
  - [ ] Downloading the wallpaper image
  - [ ] Downloading the
- [ ] Allow flats on the set command
  - [ ] `-t` sets the theme
  - [ ] `-w` sets the wallpaper
  - [ ] `-tw` or `-wt` sets both
- [ ] Setup clear instructions for how to set up
- [ ] Make sure all actions take place in `~/.config/aw` (check files, write files, etc...)
- [ ] Add `fish` auto-complete on `aw set <tab>` (see [Writing your own completions](https://fishshell.com/docs/current/completions.html))
- [ ] Change config to be relative to bin
- [ ] Write instructions for setting up project
- [ ] Publish to Homebrew
- [ ] Add appropriate copywrite credits for wallpapers
- [ ] Add support for different desktop sizes
- [ ] Create extendable base theme
