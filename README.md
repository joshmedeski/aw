# Alacritty + Wallpaper

Library of wallpapers with matching Alacritty themes.

## Prerequesites

You need the following libraries installed for this to work:

- [fzf](https://github.com/junegunn/fzf): 🌸 A command-line fuzzy finder
- [tmux (optional)](https://github.com/tmux/tmux): terminal multiplexer

## How to install

Clone this repo to your `~/.config/alacritty` directory:

```sh
git clone git@github.com:joshmedeski/aw.git ~/.config/alacritty
```

**Important:** Your Alacritty config file needs to be under `~/.config/alacritty/alacritty.yml`

Add this to the bottom of your config file:

```sh
import:
  - ~/.config/alacritty/active-theme.yml
```

