//
//  JKEPatientsViewController.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKEPatientsViewController.h"
#import "JKEPatientCell.h"

@interface JKEPatientsViewController()

@end

@implementation JKEPatientsViewController

    -(id)initWithStyle:(UITableViewStyle)style {
	    self = [super initWithStyle:style];
	    if (self) {
		    // Custom initialization
	    }
	    return self;
    }

    -(void)viewDidLoad {
	    [super viewDidLoad];

	    // Uncomment the following line to preserve selection between presentations.
	    // self.clearsSelectionOnViewWillAppear = NO;

	    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
	    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
    }

    -(void)didReceiveMemoryWarning {
	    [super didReceiveMemoryWarning];
	    // Dispose of any resources that can be recreated.
    }

#pragma mark - Table view data source

    -(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	    // Return the number of sections.
	    return 2;
    }

    -(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	    // Return the number of rows in the section.
	    return 5;
    }

    -(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
	    static NSString *CellIdentifier = @"JKEPatientCell";
	    JKEPatientCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];

	    // Configure the cell...

	    return cell;
    }

    -(NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
	    return @"A";
    }

    /*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath
{
	// Return NO if you do not want the specified item to be editable.
	return YES;
}
*/

    /*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
	if (editingStyle == UITableViewCellEditingStyleDelete) {
		// Delete the row from the data source
		[tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
	}
	else if (editingStyle == UITableViewCellEditingStyleInsert) {
		// Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
	}
}
*/

    /*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
}
*/

    /*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
	// Return NO if you do not want the item to be re-orderable.
	return YES;
}
*/

    /*
#pragma mark - Navigation

// In a story board-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
	// Get the new view controller using [segue destinationViewController].
	// Pass the selected object to the new view controller.
}

 */

    -(IBAction)unwindToThisViewController:(UIStoryboardSegue *)unwindSegue {
    }
@end
