<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>

    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadDescription</key>
            <string>Global proxy using Cloudflare Gateway PAC. DNS remains local.</string>

            <key>PayloadDisplayName</key>
            <string>Cloudflare PAC (Local DNS)</string>

            <key>PayloadIdentifier</key>
            <string>quack.pac.localdns</string>

            <key>PayloadType</key>
            <string>com.apple.proxy.http.global</string>

            <key>PayloadUUID</key>
            <string>F1A2B3C4-D5E6-7890-ABCD-112233445566</string>

            <key>PayloadVersion</key>
            <integer>1</integer>

            <!-- PAC URL from your new Gateway -->
            <key>ProxyType</key>
            <string>Auto</string>

            <key>ProxyPACURL</key>
            <string>https://btchimquackuk.github.io/pac-hoat/cloudflare-proxxy.pac</string>

            <!-- Allow fallback if PAC cannot be fetched -->
            <key>ProxyPACFallbackAllowed</key>
            <true/>
        </dict>
    </array>

    <key>PayloadDescription</key>
    <string>Cloudflare PAC profile with local DNS and WARP compatibility.</string>

    <key>PayloadDisplayName</key>
    <string>Cloudflare PAC (Local DNS)</string>

    <key>PayloadIdentifier</key>
    <string>quack.pac.root.localdns</string>

    <key>PayloadOrganization</key>
    <string>Quackfrmda9ine Stack</string>

    <key>PayloadRemovalDisallowed</key>
    <false/>

    <key>PayloadType</key>
    <string>Configuration</string>

    <key>PayloadUUID</key>
    <string>ABCDEF00-1111-2222-3333-444455556666</string>

    <key>PayloadVersion</key>
    <integer>1</integer>

</dict>
</plist>
