#!/usr/bin/expect -f
spawn scp -r styleguide/ root@192.168.1.171:/srv/nodejs/hmly-components
interact
