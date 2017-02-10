// This file is modified from the original Helios codebase, as detailed in the README.md file.
/*
 * A dummy version of bigint for Helios
 * 
 * no math is done in JavaScript, but the BigInt abstraction exists so that 
 * higher-level data structures can be parsed/serialized appropriately.
 */

// A wrapper for java.math.BigInteger with some appropriate extra functions for JSON and 
// generally being a nice JavaScript object.

BigIntDummy = function(value, radix){
  
	this.toString = function() {
	    return this.value;
	};
  
	this.toJSONObject = function() {
	    // toString is apparently not overridden in IE, so we reproduce it here.
	    return this.value;
	};
  
	this.add = function(other) {
	    throw "dummy, no add!";
	};
  
	this.bitLength = function() {
	    throw "dummy, nobitlength!";
	};
  
	this.mod = function(modulus) {
	    throw "dummy, no mod!";
	};
  
	this.equals = function(other) {
	    throw "dummy, no equals!";
	};
  
	this.modPow = function(exp, modulus) {
	    throw "dummy, no modpow!";
	};
	
	this.negate = function() {
	    throw "dummy, no negate!";
	};
  
	this.multiply = function(other) {
	    throw "dummy, no multiply!";
	};
  
	this.modInverse = function(modulus) {
	    throw "dummy, no modInverse";
	};


        // Note: "constructor" (init function) moved to the end

	    if (radix != 10)
		throw "in dummy, only radix=10, here radix=" + radix;
	    
	    this.value = value;
};

BigIntDummy.use_applet = false;

BigIntDummy.is_dummy = true;
BigIntDummy.in_browser = false;

BigIntDummy.fromJSONObject = function(s) {
  return new BigIntDummy(s, 10);
};

BigIntDummy.fromInt = function(i) {
  return BigIntDummy.fromJSONObject("" + i);
};

BigIntDummy.ZERO = new BigIntDummy("0",10);
BigIntDummy.ONE = new BigIntDummy("1",10);
BigIntDummy.TWO = new BigIntDummy("2",10);
BigIntDummy.FORTY_TWO = new BigIntDummy("42",10);

BigIntDummy.ready_p = true;

BigIntDummy.setup = function(callback, fail_callback) {
    //console.log("using dummy bigint");
  callback();
}
