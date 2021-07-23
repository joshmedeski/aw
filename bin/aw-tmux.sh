#!/bin/sh
cat ./themes.txt | fzf-tmux -p -m --reverse --preview 'cp ./aw-themes/{}.yml ../theme.yml && wallpaper set ./aw-themes/{}.jpg && touch ../alacritty.yml && bat --color=always --style=numbers ./colors/{}.yml'
