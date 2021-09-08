Clicking or firing HTML events. Also finding HTML elements, 2 methods.

```ts
let btn = fixture.debugElement.query(By.css('p')); // Don't forget to import `By`!
btn.triggerEventHandler('click', null);
```

Alternative:

```ts
let button = fixture.debugElement.nativeElement.querySelector('button');
button.click();
```

