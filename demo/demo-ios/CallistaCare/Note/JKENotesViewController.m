//
//  JKENotesViewController.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKENotesViewController.h"

@implementation JKENotesViewController

#pragma mark - Table view data source

    -(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	    return 1;
    }

    -(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	    return 1;
    }

    -(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {

	    static NSString *CellIdentifier = @"JKENoteCell";
	    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];

	    // Configure the cell...

	    return cell;
    }

    -(IBAction)unwindToThisViewController:(UIStoryboardSegue *)unwindSegue {
    }

@end
