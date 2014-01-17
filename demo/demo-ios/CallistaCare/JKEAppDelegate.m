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

	    UIColor *blue = [UIColor colorWithRed:45.0 / 255.0 green:52.0 / 255.0 blue:112.0 / 255.0 alpha:1.0];

	    [[UINavigationBar appearance] setBarTintColor:blue];
	    [[UINavigationBar appearance] setTintColor:[UIColor whiteColor]];
	    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent];
	    self.window.tintColor = blue;

	    return YES;
    }

@end
