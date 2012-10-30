function KeylookupCtrl($scope) {
    //get data from backend and bind to view
    //$http.get("/api/config?fields=id,site_name,test_uri,country").success(function(data) {
    //    $scope.configs = _.map(data, translate_country_name);
    //});
    $scope.data = [
        {key_code: "Cmd-Click", application: "Finder", description: "Open Sidebar item in a new window"},
        {key_code: "Cmd-1", application: "Finder", description: "Switch Finder views (Icon)"},
        {key_code: "Cmd-2", application: "Finder", description: "Switch Finder views (List)"},
        {key_code: "Cmd-3", application: "Finder", description: "Switch Finder views (Column)"},
        {key_code: "Cmd-4", application: "Finder", description: "Switch Finder views (Cover Flow)"},
        {key_code: "Cmd-Tab", application: "App Switcher", description: "to switch to last used app."},
        {key_code: "Opt-Left", application: "Working with Text", description: "Go to beginning of current or previous word"},
        {key_code: "Ctrl-A", application: "Emacs", description: "go to start of line (move cursor to start of line) 	"},
        {key_code: "Ctrl-E", application: "Emacs", description: "go to end of line (move cursor to end of line) 	"},
        {key_code: "Ctrl-P", application: "Emacs", description: "go up one line 	"},
        {key_code: "Ctrl-N", application: "Emacs", description: "go down one line 	"},
        {key_code: "Ctrl-B", application: "Emacs", description: "go back a character (move cursor left) 	"},
        {key_code: "Ctrl-F", application: "Emacs", description: "go forward a character (move cursor right) 	"},
        {key_code: "Ctrl-D", application: "Emacs", description: "delete the character to the right of the cursor 	"},
        {key_code: "Ctrl-H", application: "Emacs", description: "delete the character to the left of the cursor 	"},
        {key_code: "Ctrl-K", application: "Emacs", description: "delete the selection or to the end of the line (acts like cutting the text) 	"},
        {key_code: "Ctrl-Y", application: "Emacs", description: "yank back the killed text (acts like pasting) 	"},
        {key_code: "Ctrl-V", application: "Emacs", description: "scroll down 	"},
        {key_code: "Ctrl-L", application: "Emacs", description: "center the current line in the window 	"},
        {key_code: "Ctrl-O", application: "Emacs", description: "insert line break after the cursor without moving the cursor 	"},
        {key_code: "Ctrl-T", application: "Emacs", description: "transpose letters (swaps letters on left and right of cursor) 	"}
    ];
    
    //bind downdown list
    $scope.key_names = ["Tab", "Return", "Enter", "Eject", "Escape", "Page Up", "Page Down", "Home", "End", "Up", "Down", "Left", "Right", "Delete Left", "Delete Right", "Click", "Space"];
    
    //default values
    $scope.key = {command: false, ctrl: false, shift: false, name: ""};
    $scope.results = $scope.data;
    
    //event handlers
    $scope.apply_filter = function() {
        var key_code = ($scope.key.command ? "Cmd-" : "") + 
                                    ($scope.key.option ? "Opt-" : "") + 
                                    ($scope.key.ctrl ? "Ctrl-" : "") + 
                                    ($scope.key.shift ? "Shift-" : "") + 
                                    $scope.key.name;
                                    
        if (key_code == "") {
            $scope.results = $scope.data;
        } else {
            $scope.results = _.filter($scope.data, function(obj) {return obj.key_code.toLowerCase() == key_code.toLowerCase();});
        }
        $scope.search = "";
    };
    
    $scope.reset = function() {
        $scope.key = {command: false, ctrl: false, shift: false, name: ""};
        $scope.search = "";
    }
}
