#include <eHealth.h>

void setup() {
  Serial.begin(115200);
}

void loop() {  
  float ecg;
  byte serialByte;
  
  //while (Serial.available() > 0) {
    //serialByte = Serial.read();
    //if (serialByte == '1') {
      while (1) {
      
        ecg = eHealth.getECG();
        Serial.println(ecg, 2);
        
        delay(10);
      
        //if (Serial.available() > 0) {
          //serialByte = Serial.read();
          //if (serialByte == '0') {
           // break;
          //}
        //}
     // }
    //}
  }
}

