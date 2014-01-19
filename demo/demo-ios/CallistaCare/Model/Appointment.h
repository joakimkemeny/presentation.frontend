//
//  Appointment.h
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-18.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

@interface Appointment : NSManagedObject

    @property(nonatomic, retain) NSNumber *id;
    @property(nonatomic, retain) NSDate *startTime;
    @property(nonatomic, retain) NSDate *endTime;
    @property(nonatomic, retain) NSString *notes;

    @property(nonatomic, readonly) NSString *sectionTitle;

@end
