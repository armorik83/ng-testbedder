/* tslint:disable:max-classes-per-file */

function Injectable() {
  return (cls: any) => {
    return cls
  }
}

function OtherDecorator() {
  return (cls: any) => {
    return cls
  }
}

class AService {

}

class BService {

}

@Injectable()
class CCCC {

  constructor(
    private aService: AService,
    private bService: BService,
  ) {
    //
  }

  methodA(): string {
    return 'string'
  }

}

class DDDD {

  methodA(): string {
    return 'string'
  }

}
