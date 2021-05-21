function extendable(classRef)
{
    assert.isOk(classRef.extend);
    assert.isOk(classRef.e);
    assert.equal(classRef.extend, classRef.e);
    const CustomClass = classRef.extend(function ()
    {
        classRef.call(this);
    });
    const obj1 = new CustomClass();

    assert.isOk(obj1 instanceof classRef);
}

module.exports = extendable;
