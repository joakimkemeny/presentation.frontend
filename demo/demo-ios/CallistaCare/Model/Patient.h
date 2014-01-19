//
//  Patient.h
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-18.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

@interface Patient : NSManagedObject

    @property(nonatomic, retain) NSNumber *id;
    @property(nonatomic, retain) NSString *civicRegNr;
    @property(nonatomic, retain) NSString *firstName;
    @property(nonatomic, retain) NSString *lastName;
    @property(nonatomic, retain) NSString *streetAddress;
    @property(nonatomic, retain) NSString *zipCode;
    @property(nonatomic, retain) NSString *city;
    @property(nonatomic, retain) NSString *phone;
    @property(nonatomic, retain) NSString *mobile;

    @property(nonatomic, readonly) NSString *sectionTitle;

@end
