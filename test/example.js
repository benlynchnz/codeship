import webdriverio from 'webdriverio';
import chai from 'chai';

let options = {
	desiredCapabilities: {
		browserName: 'chrome'
	}
};

let assert = chai.assert,
		expect = chai.expect,
		client = webdriverio.remote(options);


describe('Load Page', function() {

	this.timeout(5000);

	before((done) => {
		client.init(done);
	});

	it('Title Should be Codeship', (done) => {
		client
      .url("http://jude-io-codeship.s3-website-ap-southeast-2.amazonaws.com/")
			.getTitle().then((title) => {
				expect(title).to.equal("Codeship")
			})
			.call(done);
	});

	it('Should have text Foo', (done) => {
		client
			.getText("#main", (err, text) => {
        // expect(err)to.be.undefined;
        expect(text).to.equal("Foo")
      })
			.call(done);
	});

	after((done) => {
		client.end(done);
	});

});
