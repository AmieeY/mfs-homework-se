import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorComponent } from 'src/app/components/editor/editor.component';

//import { ArticleEditorComponent } from './article-editor.component';

describe('ArticleEditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
