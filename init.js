load('api_config.js');
load('api_mqtt.js');
load('api_gpio.js');
load('api_sys.js');
load('api_timer.js');
load('api_net.js');
load('api_esp32.js');
load('api_dht.js');

let appName = 'init.js';

let pin=18;

let dht= DHT.create(pin,DHT.DHT11);

//let tempsensor = {
//    read_temp: ffi('float sensor_read_temp(void)')
//};

//let deviceName = Cfg.get('device.id');
//let topic = '/devices/' + deviceName + '/events';
//print('Topic: ', topic);



function getInfo() {
    return JSON.stringify({
        temp: tempsensor.read_temp()
    });
};

function publishData() {
    if (MQTT.pub(topic, getInfo())) {
        print(appName, 'Published');
    } else {
        print(appName, 'Not connected');
    }
}
print(appName);
Timer
    .set(60000, true, function () {
        //print("read temp push data to server",tempsensor.read_temp());
       //publishData();
        print("temperature is",dht.getTemp());
        print("humidity is",dht.getHumidity());
    },null);



