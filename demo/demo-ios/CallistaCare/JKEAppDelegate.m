//
//  JKEAppDelegate.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKEAppDelegate.h"

@implementation JKEAppDelegate

    -(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

	    // Configure the appearance.
	    UIColor *blue = [UIColor colorWithRed:45.0 / 255.0 green:52.0 / 255.0 blue:112.0 / 255.0 alpha:1.0];
	    [[UINavigationBar appearance] setBarTintColor:blue];
	    [[UINavigationBar appearance] setTintColor:[UIColor whiteColor]];
	    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent];
	    self.window.tintColor = blue;

	    RKLogConfigureByName("RestKit/Network", RKLogLevelTrace);

	    // Initialize the Core Data stack
	    NSURL *modelURL = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"Model" ofType:@"momd"]];
	    NSManagedObjectModel
			    *managedObjectModel = [[[NSManagedObjectModel alloc] initWithContentsOfURL:modelURL] mutableCopy];
	    RKManagedObjectStore
			    *managedObjectStore = [[RKManagedObjectStore alloc] initWithManagedObjectModel:managedObjectModel];
	    [managedObjectStore createPersistentStoreCoordinator];
	    NSError *error = nil;
	    NSPersistentStore __unused *persistentStore = [managedObjectStore addInMemoryPersistentStore:&error];
	    NSAssert(persistentStore, @"Failed to add persistent store: %@", error);
	    [managedObjectStore createManagedObjectContexts];
	    [RKManagedObjectStore setDefaultStore:managedObjectStore];

	    // Configure the object manager.
	    RKObjectManager *objectManager =
			    [RKObjectManager managerWithBaseURL:[NSURL URLWithString:@"http://192.168.100.100:8080"]];
	    objectManager.managedObjectStore = managedObjectStore;
	    [objectManager.HTTPClient setDefaultHeader:@"Content-Type" value:@"application/json"];
	    [RKObjectManager setSharedManager:objectManager];

	    // Add mapping for patients.
	    RKEntityMapping *patientMapping =
			    [RKEntityMapping mappingForEntityForName:@"Patient" inManagedObjectStore:managedObjectStore];
	    [patientMapping addAttributeMappingsFromDictionary:@{
			    @"id" : @"id", @"civicRegNr" : @"civicRegNr", @"firstName" : @"firstName", @"lastName" : @"lastName",
			    @"streetAddress" : @"streetAddress", @"zipCode" : @"zipCode", @"city" : @"city", @"phone" : @"phone",
			    @"mobile" : @"mobile"
	    }];
	    [objectManager addResponseDescriptor:[RKResponseDescriptor responseDescriptorWithMapping:patientMapping
			    method:RKRequestMethodAny pathPattern:@"/api/patients" keyPath:@"patients"
			    statusCodes:RKStatusCodeIndexSetForClass(RKStatusCodeClassSuccessful)]];

	    // Add mapping for appointments.
	    RKEntityMapping *appointmentMapping =
			    [RKEntityMapping mappingForEntityForName:@"Appointment" inManagedObjectStore:managedObjectStore];
	    [appointmentMapping addAttributeMappingsFromDictionary:@{
			    @"id" : @"id", @"startTime" : @"startTime", @"endTime" : @"endTime", @"notes" : @"notes"
	    }];
	    [objectManager addResponseDescriptor:[RKResponseDescriptor responseDescriptorWithMapping:appointmentMapping
			    method:RKRequestMethodAny pathPattern:@"/api/appointments" keyPath:@"appointments"
			    statusCodes:RKStatusCodeIndexSetForClass(RKStatusCodeClassSuccessful)]];

	    // Configure the view controllers.
	    NSArray *viewControllers = ((UITabBarController *) self.window.rootViewController).viewControllers;
	    for (id viewController in viewControllers) {
		    UIViewController *controller = ((UINavigationController *) viewController).topViewController;
		    if ([controller respondsToSelector:NSSelectorFromString(@"setManagedObjectContext:")]) {
			    [controller setValue:managedObjectStore.mainQueueManagedObjectContext forKey:@"managedObjectContext"];
		    }
	    }

	    return YES;
    }

@end
