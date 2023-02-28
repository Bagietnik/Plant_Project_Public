# Plant_Project_Public
IoT in home

Hardware used in this project: 

Boards:
- STM32 Nucleo-F411RE 
- ESP32-DevKitC
- Raspberry Pi 4B

Sensors:
- TSL2591X Light Sensor (Waveshare)
- MCP9808 High Accuracy Digital Temperature Sensor (Adafruit)

Smart Radiator Thermostat: Tuya GTZ03

SONOFF Zigbee 3.0 USB Dongle Plus Gateway

Software:
- STM32CubeIDE 1.9.0 (collecting data from sensors)
- Node.js (Mqtt broker) 
- Arduino IDE (ESP32 mqtt client)
- Zigbee2MQTT

05/02/2023 

Provided functionalities - Measurement of light intensity in the room (lux)

Integration light sensor with the stm board. 
Serial port and timer configuration.


![Zrzut ekranu 2023-02-05 200711](https://user-images.githubusercontent.com/84154206/216839664-f0f82adb-ca7f-4afe-80ab-f294cff2b691.png)


![unnamed](https://user-images.githubusercontent.com/84154206/216839682-d0876469-ee3a-4fdf-a583-380088680cda.jpg)


10/02/2023 

Provided functionalities - Measurement of ambient temperature (°C)

Integration temperature sensor with the stm board. 

![image](https://user-images.githubusercontent.com/84154206/218199155-60ce0896-1819-4822-b9ea-5ccf3bed3dd8.png)

![unnamed](https://user-images.githubusercontent.com/84154206/218198800-f5e6de29-0b36-447c-8d13-b4df218c3bfc.jpg)


15/02/2023

Integration of both sensors. Uart communication (in the future with esp32)

![Zrzut ekranu 2023-02-15 192750](https://user-images.githubusercontent.com/84154206/219119826-2942f6a7-7f91-4e13-99f4-dc41fda62361.png)

![unnamed](https://user-images.githubusercontent.com/84154206/219119276-e000c37e-7a22-4e74-833a-98c097f67b7b.jpg)


20/02/2023

Introduction of raspberrypi and esp32 module.

A basic version of the mqtt (aedes) broker has been created. A connection between the broker and the customer has been established.

Noticed messages (broker):

![Zrzut ekranu 2023-02-20 221326](https://user-images.githubusercontent.com/84154206/220199305-6a624129-604e-46a3-aaa9-7c008d8f62ac.png)

![unnamed (1)](https://user-images.githubusercontent.com/84154206/220198525-a4410d99-5e76-4c59-bc31-bbddfc88d96a.jpg)

26/02/2023

STM32 program update, MQTT communication optimization. 
Implementation of Node-Red for easy monitoring the values collected.
Preparation of power supply stations
Installation of smart radiator thermostat (manual mode for now).


![Zrzut ekranu 2023-02-26 192955](https://user-images.githubusercontent.com/84154206/221431377-480a491e-7002-4b58-b3c0-1a65899f0df1.png)

![333883759_1252378475420803_261353424374356721_n](https://user-images.githubusercontent.com/84154206/221431371-252e17ec-e5bb-41d4-92e9-c06171662bcb.jpg)

![333778958_208761118340138_614288927622025369_n](https://user-images.githubusercontent.com/84154206/221431388-abd058b3-66b9-4cec-98c1-6871b0881a96.jpg)


28/02/2023

Communicaton with smart radiator thermostat (called "Valvy) was provided. 
Now we are able to set values via mqtt.

![Zrzut ekranu 2023-02-28 231904](https://user-images.githubusercontent.com/84154206/221994444-bbd0eb4d-b64f-44ef-a557-b779986b9e04.png)

![Zrzut ekranu 2023-02-28 231853](https://user-images.githubusercontent.com/84154206/221994455-cc303f35-4bdb-407f-8e00-9af65497329c.png)

![Zrzut ekranu 2023-02-28 231413](https://user-images.githubusercontent.com/84154206/221994183-dbbe1c1a-240d-402f-a7ea-87262ebd9abc.png)


