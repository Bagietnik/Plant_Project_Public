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


Software:
- STM32CubeIDE 1.9.0 (collecting data from sensors)
- Node.js (Mqtt broker) 
- Arduino IDE (ESP32 mqtt client)

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
