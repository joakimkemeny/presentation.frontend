//
//  JKEAppointmentsViewController.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-14.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKEAppointmentsViewController.h"
#import "Appointment.h"

@interface JKEAppointmentsViewController()

    @property(strong, nonatomic) NSDateFormatter *timeFormatter;

@end

@implementation JKEAppointmentsViewController

#pragma mark - View lifecycle

    -(void)viewDidLoad {
	    [super viewDidLoad];

	    // Setup the refresh control and do the initial refresh.
	    [self.refreshControl addTarget:self action:@selector(loadAppointments)
			    forControlEvents:UIControlEventValueChanged];
	    [self loadAppointments];
	    [self.refreshControl beginRefreshing];
    }

    -(void)loadAppointments {

	    [[RKObjectManager sharedManager] getObjectsAtPath:@"/api/appointments" parameters:nil
			    success:^(RKObjectRequestOperation *operation, RKMappingResult *mappingResult) {
				    [self.refreshControl endRefreshing];
			    } failure:^(RKObjectRequestOperation *operation, NSError *error) {
		    [self.refreshControl endRefreshing];
		    UIAlertView *alertView = [[UIAlertView alloc]
				    initWithTitle:@"An Error Has Occurred" message:[error localizedDescription] delegate:nil
				    cancelButtonTitle:@"OK" otherButtonTitles:nil];
		    [alertView show];
	    }];
    }

#pragma mark - Table view data source

    -(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	    return [self.fetchedResultsController.sections count];
    }

    -(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	    return [self.fetchedResultsController.sections[section] numberOfObjects];
    }

    -(NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
	    return [self.fetchedResultsController.sections[section] name];
    }

    -(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {

	    UITableViewCell
			    *cell = [tableView dequeueReusableCellWithIdentifier:@"JKEAppointmentCell" forIndexPath:indexPath];
	    [self configureCell:cell atIndexPath:indexPath];
	    return cell;
    }

#pragma mark - Fetched results controller

    -(NSFetchedResultsController *)fetchedResultsController {

	    if (_fetchedResultsController != nil) {
		    return _fetchedResultsController;
	    }

	    NSFetchRequest *fetchRequest = [[NSFetchRequest alloc] init];
	    NSEntityDescription *entity = [NSEntityDescription entityForName:@"Appointment" inManagedObjectContext:self
			    .managedObjectContext];
	    [fetchRequest setEntity:entity];

	    // Set the batch size to a suitable number.
	    [fetchRequest setFetchBatchSize:20];

	    // Set the sort order.
	    NSSortDescriptor *sortDescriptor = [[NSSortDescriptor alloc] initWithKey:@"startTime" ascending:YES];
	    NSArray *sortDescriptors = @[sortDescriptor];
	    [fetchRequest setSortDescriptors:sortDescriptors];

	    // Initialize the controller.
	    NSFetchedResultsController *aFetchedResultsController = [[NSFetchedResultsController alloc]
			    initWithFetchRequest:fetchRequest managedObjectContext:self.managedObjectContext
			    sectionNameKeyPath:@"sectionTitle" cacheName:@"Master"];
	    aFetchedResultsController.delegate = self;
	    self.fetchedResultsController = aFetchedResultsController;

	    NSError *error = nil;
	    if (![self.fetchedResultsController performFetch:&error]) {
		    NSLog(@"Unresolved error %@, %@", error, [error userInfo]);
		    abort();
	    }

	    return _fetchedResultsController;
    }

    -(void)controllerWillChangeContent:(NSFetchedResultsController *)controller {
	    [self.tableView beginUpdates];
    }

    -(void)controller:(NSFetchedResultsController *)controller
		    didChangeSection:(id<NSFetchedResultsSectionInfo>)sectionInfo atIndex:(NSUInteger)sectionIndex
		    forChangeType:(NSFetchedResultsChangeType)type {

	    switch (type) {
		    case NSFetchedResultsChangeInsert:
			    [self.tableView insertSections:[NSIndexSet indexSetWithIndex:sectionIndex]
					    withRowAnimation:UITableViewRowAnimationFade];
	            break;

		    case NSFetchedResultsChangeDelete:
			    [self.tableView deleteSections:[NSIndexSet indexSetWithIndex:sectionIndex]
					    withRowAnimation:UITableViewRowAnimationFade];
	            break;
	    }
    }

    -(void)controller:(NSFetchedResultsController *)controller didChangeObject:(id)anObject
		    atIndexPath:(NSIndexPath *)indexPath forChangeType:(NSFetchedResultsChangeType)type
		    newIndexPath:(NSIndexPath *)newIndexPath {

	    UITableView *tableView = self.tableView;
	    switch (type) {
		    case NSFetchedResultsChangeInsert:
			    [tableView insertRowsAtIndexPaths:@[newIndexPath] withRowAnimation:UITableViewRowAnimationFade];
	            break;

		    case NSFetchedResultsChangeDelete:
			    [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
	            break;

		    case NSFetchedResultsChangeUpdate:
			    [self configureCell:[tableView cellForRowAtIndexPath:indexPath] atIndexPath:indexPath];
	            break;

		    case NSFetchedResultsChangeMove:
			    [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
	            [tableView insertRowsAtIndexPaths:@[newIndexPath] withRowAnimation:UITableViewRowAnimationFade];
	            break;
	    }
    }

    -(void)controllerDidChangeContent:(NSFetchedResultsController *)controller {
	    [self.tableView endUpdates];
    }

    -(void)configureCell:(UITableViewCell *)cell atIndexPath:(NSIndexPath *)indexPath {

	    Appointment *appointment = [self.fetchedResultsController objectAtIndexPath:indexPath];

	    cell.textLabel.text = appointment.notes;
	    cell.detailTextLabel.text =
			    [NSString stringWithFormat:@"%@ - %@", [self.timeFormatter stringFromDate:appointment.startTime],
			                               [self.timeFormatter stringFromDate:appointment.endTime]];
    }

    -(NSDateFormatter *)timeFormatter {

	    if (_timeFormatter) {
		    return _timeFormatter;
	    }

	    _timeFormatter = [[NSDateFormatter alloc] init];
	    [_timeFormatter setDateFormat:@"HH:mm"];

	    return _timeFormatter;
    }

    -(IBAction)unwindToThisViewController:(UIStoryboardSegue *)unwindSegue {
    }

@end
