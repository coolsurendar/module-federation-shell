import { TestBed } from '@angular/core/testing';
import { ShellAppComponent } from './shell-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellAppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'shell-app' title`, () => {
    const fixture = TestBed.createComponent(ShellAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shell-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShellAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, shell-app');
  });
});
