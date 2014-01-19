//
//  Patient.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-18.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "Patient.h"

@implementation Patient

    @dynamic id;
    @dynamic civicRegNr;
    @dynamic firstName;
    @dynamic lastName;
    @dynamic streetAddress;
    @dynamic zipCode;
    @dynamic city;
    @dynamic phone;
    @dynamic mobile;

    -(NSString *)sectionTitle {

	    if (self.lastName.length == 0) {
		    return @"";
	    } else {
		    return [self.lastName substringToIndex:1];
	    }
    }

@end
