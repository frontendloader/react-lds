import prefixClasses from '../prefixClasses';

describe('prefixClasses()', () => {
  const prefix = 'slds-';

  it('should prefix a single class', () => {
    expect(prefixClasses(prefix, 'foo')).toEqual('slds-foo');
  });

  it('should prefix multiple classes', () => {
    expect(prefixClasses(prefix, ['foo', 'bar'])).toEqual('slds-foo slds-bar');
  });

  it('should prefix multiple classes passed as objects', () => {
    expect(prefixClasses(prefix, ['foo', 'bar', { herp: true, derp: true }]))
      .toEqual('slds-foo slds-bar slds-herp slds-derp');
  });

  it('should handle classNames-expressions', () => {
    expect(prefixClasses(prefix, ['foo', { bar: true }])).toEqual('slds-foo slds-bar');
  });

  it('should not prefix passThrough-classes', () => {
    expect(prefixClasses(prefix, 'foo', 'bar baz')).toEqual('slds-foo bar baz');
  });
});
