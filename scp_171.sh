#!/usr/bin/expect -f
spawn scp -r styleguide/ root@192.168.3.60:/srv/nodejs/catui
interact
