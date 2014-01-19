//
//  Note.h
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-18.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

@interface Note : NSManagedObject

    @property(nonatomic, retain) NSNumber *id;
    @property(nonatomic, retain) NSDate *createdTime;
    @property(nonatomic, retain) NSString *type;
    @property(nonatomic, retain) NSString *doctor;
    @property(nonatomic, retain) NSString *text;

@end
