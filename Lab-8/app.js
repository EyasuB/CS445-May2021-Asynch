const { Observable } = rxjs;
window.onload = function () {
    document.getElementById("empsBtn").onclick = function(){
        let length = document.getElementById("empListLength").value;
        Observable.create(observer => {                // using the creation of Observable from the json object and Promise
            fetch('https://randomuser.me/api/?results=' + length)
                .then(response => response.json())
            .then(data => {
                observer.next(data.results);
                observer.complete();
            })
            .catch(err => observer.error(err));
        }).subscribe(data => {
            const emplyeeDiv = document.getElementById('employee-list');
            emplyeeDiv.innerHTML = '';
            data.forEach(user => {
                let template = `
                <div class ="col">
                ${user.name.first} ${user.name.last}
                </div>
                <div class = "col">
                <h3>Location</h3>
                <p>${user.location.street.number}${user.location.street.name}</p>
                <p>${user.location.city}, ${user.location.state} ${user.location.country} $${user.location.postcode}</p> 
                </div>`;
                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                emplyeeDiv.appendChild(div);
            })
        })
    }
}