function main() { 
  extConnect('atnd', 'http://api.atnd.org/events/?format=json&').request();
  extConnect('connpass', 'http://connpass.com/api/v1/event/?').request();
  extConnect('zusaar', 'http://www.zusaar.com/api/event/?').request();
}
