//
//  ViewController.m
//  weex-ios
//
//  Created by NiYao on 1/11/17.
//  Copyright © 2017 SuneBearNY. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK.h>
#import <WeexSDK/WXSDKInstance.h>
#import <WeexSDK/WXSDKEngine.h>
#import <WeexSDK/WXUtility.h>
#import <WeexSDK/WXDebugTool.h>
#import <WeexSDK/WXSDKManager.h>

#define HOME_URL [NSString stringWithFormat:@"http://%@:12580/examples/build/index.js", DEMO_HOST]

@interface ViewController ()

@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    
    _instance.onFailed = ^(NSError *error) {
        //process failure
        NSLog(@"%@", error.localizedDescription);
    };
    
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
    };
//    NSURL *url = [NSURL URLWithString:
//                  @"http://127.0.0.1:8081/weex_tmp/h5_render/?hot-reload_controller&page=index.js&loader=xhr"];
//    [self.instance renderWithURL:url];
    NSString *url = [NSString stringWithFormat:@"file://%@/index.js",[NSBundle mainBundle].bundlePath];
    [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
}

@end
