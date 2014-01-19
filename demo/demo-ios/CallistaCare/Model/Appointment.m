//
//  Appointment.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-18.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "Appointment.h"


@implementation Appointment

    @dynamic id;
    @dynamic startTime;
    @dynamic endTime;
    @dynamic notes;
    @dynamic sectionTitle;

    -(NSString *)sectionTitle {

	    if (self.startTime == nil) {
		    return @"";
	    } else {
		    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
		    [dateFormatter setDateFormat:@"yyyy-MM-dd"];

		    return [dateFormatter stringFromDate:self.startTime];
	    }
    }

@end
