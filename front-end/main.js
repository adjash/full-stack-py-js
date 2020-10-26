let request = new XMLHttpRequest();


var jobs;
request.open("GET", "http://127.0.0.1:5000/");
request.send();
request.onload = () => {
    //console.log(request);
    if (request.status == 200)
    {
        //console.log(JSON.parse(request.response));
        jobs = JSON.parse(request.response);
        outputJobs();
    }else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}


function outputJobs() {
    var main = document.getElementById("main");
    console.log(jobs)
    jobs.forEach(element => {
        let div = document.createElement("div");
        div.className = "job-item";

        let jobTitle = document.createElement("p");
        jobTitle.className = "job-title";
        jobTitle.innerHTML = element.title;

        let jobDesc = document.createElement("span");
        jobDesc.className = "job-description"
        jobDesc.innerHTML = element.description;


        let employerLogo = document.createElement("img");
        employerLogo.className = "job-logo";
        employerLogo.src = element.company_logo;

        let employer = document.createElement("p");
        employer.className = "job-employer";
        employer.innerHTML = element.company;

        let expandable = document.createElement("a");
        expandable.className = "rm-toggle";
        expandable.innerHTML = ("Read More");
        expandable.href="test-href";

        div.appendChild(jobTitle);
        div.appendChild(jobDesc);
        div.appendChild(employer);
        div.appendChild(employerLogo);
        div.appendChild(expandable);


        console.log(jobTitle)
        
        main.appendChild(div)
    });
}