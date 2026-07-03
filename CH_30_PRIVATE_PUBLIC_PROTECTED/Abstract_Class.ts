abstract class BaseTest {
    public testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    loan1(): void {
        console.log("Hi");
    }
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("  GIVE LOAN");

    }
}

let test = new UITest("Login test");
console.log("Running: " + test.testName);
test.setup();
test.execute();
test.loan();
test.teardown();