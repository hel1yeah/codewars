function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}
domainName('http://google.com');
domainName('http://google.co.jp');
domainName('www.xakep.ru');
