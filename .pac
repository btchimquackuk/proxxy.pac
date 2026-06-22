function FindProxyForURL(url, host) {

    // ===== 1. Identity Provider (must bypass) =====
    if (host === "login.microsoftonline.com" ||
        host === "accounts.google.com" ||
        host === "github.com")
        return "DIRECT";

    // ===== 2. Resolve host =====
    var ip = dnsResolve(host);
    if (isInNet(ip, "10.0.0.0", "255.0.0.0") ||
        isInNet(ip, "172.16.0.0", "255.240.0.0") ||
        isInNet(ip, "192.168.0.0", "255.255.0.0"))
        return "DIRECT";

    // ===== 3. Cloudflare internal ranges =====
    if (isInNet(ip, "100.80.0.0", "255.255.0.0"))
        return "DIRECT";

    // ===== 4. Cloudflare domains =====
    if (dnsDomainIs(host, ".cloudflare.com") ||
        dnsDomainIs(host, ".cloudflare-gateway.com"))
        return "DIRECT";

    // ===== 5. Everything else goes through Gateway =====
    return "HTTPS zo9epr9ud5.proxy.cloudflare-gateway.com:443";
}
