var MilestoneReport = MilestoneReport || {};

MilestoneReport.clickExport = function(){
    console.log("abc........");
}

MilestoneReport.updateProjectByTypeAndCategory = function(){
    var projectType = AJS.$("#projectType").val();
    var projectCategory = AJS.$("#projectCat").val();

    var projectTypes = "";
    if (projectType == undefined) {
        projectTypes = "";
    } else {
        for (var i = 0; i < projectType.length; i++) {
            if (i == 0) {
                projectTypes += projectType[i];
            } else {
                projectTypes += "," + projectType[i];
            }
        }
    }
    var projectCategories = "";
    if (projectCategory == undefined) {
        projectCategories = "";
    } else {
        for (var i = 0; i < projectCategory.length; i++) {
            if (i == 0) {
                projectCategories += projectCategory[i];
            } else {
                projectCategories += "," + projectCategory[i];
            }
        }
    }
    console.log("hang tesst");
    console.log(projectCategories);
    console.log(projectTypes);
    AJS.$.ajax({
        url: contextPath
        + "/rest/vnpt-report/1.0/report/search/getProjectsByProjectTypes/"
        + projectTypes + "/" + projectCategories,
        type: "GET",
        dataType: "json",
        success: function (data) {
            AJS.$("#projects").html('');
            var temp = "";
            for (var i = 0; i < data.length; i++) {
                temp += "<option value='" + data[i].id + "'>"
                    + data[i].name + "</option>";
            }
            AJS.$("#projects").auiSelect2("destroy");
            AJS.$("#projects").append(temp);
            AJS.$("#projects").auiSelect2();
        },
    });
}