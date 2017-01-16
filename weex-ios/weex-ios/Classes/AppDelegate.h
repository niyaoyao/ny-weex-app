//
//  AppDelegate.h
//  weex-ios
//
//  Created by NiYao on 1/11/17.
//  Copyright © 2017 SuneBearNY. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

