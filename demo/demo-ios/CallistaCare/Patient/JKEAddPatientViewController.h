//
//  JKEAddPatientViewController.h
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Patient.h"
#import "JKEPatientSaveDelegate.h"

@interface JKEAddPatientViewController : UITableViewController<UITextFieldDelegate>

    @property(weak, nonatomic) id<JKEPatientSaveDelegate> delegate;

    -(IBAction)save:(id)sender;

@end
