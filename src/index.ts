import { helloWorld } from './hello_world';

export default helloWorld;

interface StdInterface {

}

function handleStd<T extends StdInterface>(obj: T) {

}

class TestStd implements StdInterface {

}

handleStd(new TestStd());
