//
//  JKEPatientsViewController.h
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Patient.h"
#import "JKEPatientSaveDelegate.h"

@interface JKEPatientsViewController : UITableViewController<NSFetchedResultsControllerDelegate, JKEPatientSaveDelegate>

    @property(strong, nonatomic) NSFetchedResultsController *fetchedResultsController;
    @property(strong, nonatomic) NSManagedObjectContext *managedObjectContext;

@end
