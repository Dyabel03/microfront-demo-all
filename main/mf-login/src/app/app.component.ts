import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { login, loginAPI } from '../../../../container/src';
import { Login } from './domain/models/Login/login';
import { User } from './domain/models/User/user';
import { GetLoginUseCases } from './domain/usecase/get-user-use-case';

@Component({
  selector: 'mf-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'mf-login';
  email: string = '';
  psw: string = '';
  singleSpaProps?: any;
  subscription?: Subscription;
  public dataUser: User;

  constructor(private ChangeDetectorRef:ChangeDetectorRef, private getLoginUseCase: GetLoginUseCases){

  }

  ngOnInit(): void {
    this.initSubscription();
  }

  initSubscription(){
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        this.lookForEvents();
      }
    );
  }

  lookForEvents(){
    this.singleSpaProps['EventBus'].on('onUserLogged', this.onUserLogged.bind(this));
  }

  onUserLogged(data: any){
    console.log("user logged listening login ", data);
  }
  

  async ingresarByEvent() {
    console.log(`Ingresar Email: ${this.email} - psw: ${this.psw}`);

    // login({email: this.email, pass: this.psw}).subscribe(data => {
    //   this.singleSpaProps['EventBus'].emit({name:'onUserLogged',data});
    // });

    // loginAPI({email: this.email, pass: this.psw}).then(data => {
    //   console.log('DATA', data.json());
      
    //   this.singleSpaProps['EventBus'].emit({name:'onUserLogged',data});
    // });

    const data = await loginAPI({email: this.email, pass: this.psw});
    console.log('DATA', data.json());
    this.singleSpaProps['EventBus'].emit({name:'onUserLogged',data});
  }

  ingresarByService() {
    const body: Login = {
      usuario: this.email,
      password: this.psw
    }
    const response = this.getLoginUseCase.login(body);
    response.subscribe((data) => {
      this.dataUser = data;
      console.log(this.dataUser);
      
    }, error => {
      console.log(error);
      
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
