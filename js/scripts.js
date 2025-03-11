let stylemode = document.cookie;

let stylelink = document.getElementById('style');
if (stylemode == 'light') {
    stylelink.src = 'css/light.css';
} else if (stylemode == 'dark') {
    stylelink.src = 'css/dark.css';

} else {
    stylelink.src = 'css/light.css';
    document.cookie = 'light';
}
