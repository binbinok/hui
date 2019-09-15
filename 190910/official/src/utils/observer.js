import 'intersection-observer';

export default function () {
    let cb = records => {
        let record = records[0];
        let isIntersecting = record.isIntersecting;
        let target = record.target;
        let dataset = target.dataset;
        let classList = target.classList;
        let classValue = classList.value;
        let isLoaded = /\bloaded\b/g.test(classValue);
        console.log(
            '----', dataset
        )
        switch (dataset.observerType) {
          default:
            isIntersecting && isLoaded || classList.add('loaded');
            break;
        }
    };
    let targets = document.querySelectorAll('.detail');
    let ob = new IntersectionObserver(cb);
    for (let i in targets) {
        let t = targets[i];
        typeof t === 'object' && t.nodeType === 1 && ob.observe(t);
    }
}