//
// Created by Joakim Kemeny on 2014-01-19.
// Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "Patient.h"

@protocol JKEPatientSaveDelegate<NSObject>

@required
    -(void)save:(NSDictionary *)patient;

@end
