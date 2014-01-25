//
//  JKEPatientsViewController.m
//  CallistaCare
//
//  Created by Joakim Kemeny on 2014-01-13.
//  Copyright (c) 2014 Joakim Kemeny. All rights reserved.
//

#import "JKEPatientsViewController.h"
#import "JKEAddPatientViewController.h"

@implementation JKEPatientsViewController

#pragma mark - View lifecycle

    -(void)viewDidLoad {
	    [super viewDidLoad];

	    // Setup the refresh control and do the initial refresh.
	    [self.refreshControl addTarget:self action:@selector(loadPatients) forControlEvents:UIControlEventValueChanged];
	    [self loadPatients];
	    [self.refreshControl beginRefreshing];
    }

    -(void)loadPatients {

	    [[RKObjectManager sharedManager] getObjectsAtPath:@"/api/patients" parameters:nil
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

	    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"JKEPatientCell" forIndexPath:indexPath];
	    [self configureCell:cell atIndexPath:indexPath];
	    return cell;
    }

#pragma mark - Fetched results controller

    -(NSFetchedResultsController *)fetchedResultsController {

	    if (_fetchedResultsController != nil) {
		    return _fetchedResultsController;
	    }

	    NSFetchRequest *fetchRequest = [[NSFetchRequest alloc] init];
	    NSEntityDescription *entity = [NSEntityDescription entityForName:@"Patient" inManagedObjectContext:self
			    .managedObjectContext];
	    [fetchRequest setEntity:entity];

	    // Set the batch size to a suitable number.
	    [fetchRequest setFetchBatchSize:20];

	    // Set the sort order.
	    NSSortDescriptor *sortDescriptor1 = [[NSSortDescriptor alloc] initWithKey:@"sectionTitle" ascending:YES];
	    NSSortDescriptor *sortDescriptor2 = [[NSSortDescriptor alloc] initWithKey:@"firstName" ascending:YES];
	    NSArray *sortDescriptors = @[sortDescriptor1, sortDescriptor2];
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

	    Patient *patient = [self.fetchedResultsController objectAtIndexPath:indexPath];

	    cell.textLabel.text = [NSString stringWithFormat:@"%@ %@", patient.firstName, patient.lastName];
	    cell.detailTextLabel.text = patient.civicRegNr;
    }

    -(void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {

	    if ([@"AddPatientSegue" isEqualToString:segue.identifier]) {
		    UINavigationController *controller = segue.destinationViewController;
		    JKEAddPatientViewController
				    *addPatientViewController = (JKEAddPatientViewController *) controller.topViewController;
		    addPatientViewController.delegate = self;
	    }
    }

    -(void)save:(NSDictionary *)patient {

	    NSManagedObjectContext *context = [self.fetchedResultsController managedObjectContext];
	    NSEntityDescription *entity = [[self.fetchedResultsController fetchRequest] entity];
	    Patient *newPatient =
			    [NSEntityDescription insertNewObjectForEntityForName:[entity name] inManagedObjectContext:context];

	    newPatient.firstName = patient[@"firstName"];
	    newPatient.lastName = patient[@"lastName"];
	    newPatient.streetAddress = patient[@"streetAddress"];
	    newPatient.zipCode = patient[@"zipCode"];
	    newPatient.city = patient[@"civicRegNr"];
	    newPatient.phone = patient[@"phone"];
	    newPatient.mobile = patient[@"mobile"];

	    // Save the context.
	    NSError *error = nil;
	    if (![context save:&error]) {
		    NSLog(@"Unresolved error %@, %@", error, [error userInfo]);
		    abort();
	    }
    }

    -(IBAction)unwindToThisViewController:(UIStoryboardSegue *)unwindSegue {
    }

@end
