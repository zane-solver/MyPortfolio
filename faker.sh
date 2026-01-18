#!/bin/sh

# Jan 1, 1970
# https://www.calculator.net/date-calculator.html

# vADay=86400 # seconds

git filter-branch -f --env-filter '
CORRECT_NAME="DigitalAxisCore191"
CORRECT_EMAIL="MateuszKaczmarek19@proton.me"

export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
' -- --all

# echo $(date --date @"$vDate")