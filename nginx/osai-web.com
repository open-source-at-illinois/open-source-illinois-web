server {
    root /var/www/osai-web.com;
    index index.nginx-debian.html;
    server_name www.osai-web.com;

    location / {
        # proxy_pass http://localhost:8080;
        proxy_pass http://localhost:4200;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    location /back-end {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;
    ssl_certificate /etc/letsencrypt/live/www.osai-web.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.osai-web.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

# Redirect osai-web.com to www.osai-web.com
server {
    listen 443 default_server;
    listen [::]:443 default_server;
    server_name osai-web.com;
    ssl on;
    ssl_certificate /etc/letsencrypt/live/www.osai-web.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.osai-web.com/privkey.pem; # managed by Certbot
    return 301 https://www.osai-web.com$request_uri;
}

# Redirect http to https
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name www.osai-web.com, osai-web.com;
    rewrite ^ https://$host$request_uri permanent;
}
