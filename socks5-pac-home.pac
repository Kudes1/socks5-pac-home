// PAC файл для прокси Германии
// 07.08.2024

var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/ipinfo\.io/.test(host)) return "+Spain_Proxy";
        if (/^test\.com$/.test(host)) return "+Spain_Proxy";
        if (/hetzner\.com/.test(host)) return "+Spain_Proxy";
        if (/cisco\.com/.test(host)) return "+Spain_Proxy";
        if (/cdn\.oaistatic\.com/.test(host)) return "+Spain_Proxy";
        if (/medium\.com/.test(host)) return "+Spain_Proxy";
        if (/claude\.ai/.test(host)) return "+Spain_Proxy";
        if (/anthropic\.com/.test(host)) return "+Spain_Proxy";
        if (/oaiusercontent\.com/.test(host)) return "+Spain_Proxy";
        if (/openai\.com/.test(host)) return "+Spain_Proxy";
        if (/hdrezka/.test(host)) return "+Spain_Proxy";
        if (/statichdrezka\.ac/.test(host)) return "+Spain_Proxy";
        if (/flymaterez\.net/.test(host)) return "+Spain_Proxy";
        if (/parthenon\.vdbmate\.org/.test(host)) return "+Spain_Proxy";
        if (/intel\.com/.test(host)) return "+Spain_Proxy";
        if (/meta\.com/.test(host)) return "+Spain_Proxy";
        if (/news\.google\.com/.test(host)) return "+Spain_Proxy";
        if (/ntc\.party/.test(host)) return "+Spain_Proxy";
        if (/rutracker\.org/.test(host)) return "+Spain_Proxy";
        if (/rutracker\.cc/.test(host)) return "+Spain_Proxy";
        if (/terraform\.io/.test(host)) return "+Spain_Proxy";
        if (/youtube\.com/.test(host)) return "+Spain_Proxy";
        if (/googleusercontent\.com/.test(host)) return "+Spain_Proxy";
        if (/googlevideo\.com/.test(host)) return "+Spain_Proxy";
        if (/youtu\.be/.test(host)) return "+Spain_Proxy";
        if (/yt3\.ggpth\.com/.test(host)) return "+Spain_Proxy";
        if (/\.ggpth\.com/.test(host)) return "+Spain_Proxy";
        if (/ytimg\.com/.test(host)) return "+Spain_Proxy";
        if (/play\.google\.com/.test(host)) return "+Spain_Proxy";
        if (/nhacmp3youtube\.com/.test(host)) return "+Spain_Proxy";
        if (/chatgpt\.com/.test(host)) return "+Spain_Proxy";
        if (/instagram\.com/.test(host)) return "+Spain_Proxy";
        if (/facebook\.com/.test(host)) return "+Spain_Proxy";
        if (/tableau\.com/.test(host)) return "+Spain_Proxy";
        if (/hashicorp\.com/.test(host)) return "+Spain_Proxy";
        if (/gemini\.google\.com/.test(host)) return "+Spain_Proxy";
        if (/digitalocean\.com/.test(host)) return "+Spain_Proxy";
        if (/discord\.com/.test(host)) return "+Spain_Proxy";
        if (/discord\.gg/.test(host)) return "+Spain_Proxy";
        if (/mistral\.ai/.test(host)) return "+Spain_Proxy";
        if (/vdbmate\.org/.test(host)) return "+Spain_Proxy";
        if (/hello-rezka/.test(host)) return "+Spain_Proxy";
        return "DIRECT";
    },
    "+Spain_Proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 192.168.0.76:1080; SOCKS 192.168.0.76:1080";
    }
});

