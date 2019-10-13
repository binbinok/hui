const ua = navigator.userAgent;
const isMobile = ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
const in_wechat = /MicroMessenger/.test(ua)

export {
    isMobile,
    in_wechat
};