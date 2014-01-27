//
//  JKEAddPatientViewController.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKEAddPatientViewController.h"

@interface JKEAddPatientViewController()

    @property(weak, nonatomic) IBOutlet UITextField *civicRegNr;
    @property(weak, nonatomic) IBOutlet UITextField *firstName;
    @property(weak, nonatomic) IBOutlet UITextField *lastName;
    @property(weak, nonatomic) IBOutlet UITextField *streetAddress;
    @property(weak, nonatomic) IBOutlet UITextField *zipCode;
    @property(weak, nonatomic) IBOutlet UITextField *city;
    @property(weak, nonatomic) IBOutlet UITextField *phone;
    @property(weak, nonatomic) IBOutlet UITextField *mobile;

@end

@implementation JKEAddPatientViewController

    -(IBAction)save:(id)sender {

	    NSDictionary *patient = @{
			    @"civicRegNr" : self.civicRegNr.text, @"firstName" : self.firstName.text,
			    @"lastName" : self.lastName.text, @"streetAddress" : self.streetAddress.text,
			    @"zipCode" : self.zipCode.text, @"city" : self.city.text, @"phone" : self.phone.text,
			    @"mobile" : self.mobile.text
	    };

	    [self.delegate save:patient];

	    [self dismissViewControllerAnimated:true completion:nil];
    }

@end
